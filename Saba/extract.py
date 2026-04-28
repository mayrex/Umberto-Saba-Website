import sys
import subprocess
import os

try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pypdf'])
    import pypdf

folder = r'C:\Users\russo\Desktop\Documenti Domenico\Compiti\Liceo\Italiano\sito web aura\Saba'
out_file = r'C:\Users\russo\Desktop\Documenti Domenico\Compiti\Liceo\Italiano\sito web aura\Saba\extracted_text.txt'

print("Starting extraction...")
with open(out_file, 'w', encoding='utf-8') as out:
    for file in os.listdir(folder):
        if file.endswith('.pdf'):
            out.write(f'\n\n=== {file} ===\n')
            try:
                reader = pypdf.PdfReader(os.path.join(folder, file))
                for page in reader.pages:
                    text = page.extract_text()
                    if text:
                        out.write(text + '\n')
            except Exception as e:
                out.write(f'Error reading {file}: {e}')
print("Done!")
