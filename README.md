# Chandanata Dashboard via MQTT

Dashboard berbasis web yang menerima konten HTML dari publisher Python via MQTT.

## Struktur Folder

- `frontend/`: berisi file HTML, JS, dan CSS
- `backend/`: berisi Python script (`publisher.py`) dan `requirements.txt`

## Menjalankan Publisher

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
pip install -r requirements.txt
python publisher.py
