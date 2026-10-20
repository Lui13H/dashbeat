"""Cache busting: sobe a versão e atualiza o ?v= dos arquivos css/js no HTML.

    python bump_version.py          # patch: 1.0.1
    python bump_version.py minor    # minor: 1.1.0
    python bump_version.py major    # major: 2.0.0
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
VERSION_FILE = ROOT / "version.txt"
HTML_FILES = [ROOT / "painel_musical.html"]
ASSET = re.compile(r'((?:href|src)="(?:css|js)/[^"?]+\.(?:css|js))(?:\?v=[^"]*)?(")')


def bump(version, kind):
    major, minor, patch = (int(x) for x in version.split("."))
    if kind == "major":
        return f"{major + 1}.0.0"
    if kind == "minor":
        return f"{major}.{minor + 1}.0"
    return f"{major}.{minor}.{patch + 1}"


def main():
    kind = sys.argv[1] if len(sys.argv) > 1 else "patch"
    if kind not in ("patch", "minor", "major"):
        sys.exit("uso: python bump_version.py [patch|minor|major]")
    old = VERSION_FILE.read_text().strip() if VERSION_FILE.exists() else "1.0.0"
    new = bump(old, kind)
    VERSION_FILE.write_text(new + "\n")
    for f in HTML_FILES:
        text = f.read_bytes().decode("utf-8")   # bytes: preserva as quebras de linha do arquivo
        f.write_bytes(ASSET.sub(rf"\1?v={new}\2", text).encode("utf-8"))
        print(f"{f.name}: assets -> ?v={new}")
    print(f"{old} -> {new}")


if __name__ == "__main__":
    main()
