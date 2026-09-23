from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load models
sql_model = joblib.load("models/sql_model.pkl")
vectorizer = joblib.load("models/sql_vectorizer.pkl")

ddos_model = joblib.load("models/ddos_model.pkl")
scaler = joblib.load("models/scaler.pkl")


@app.route("/")
def home():
    return render_template("index.html")


# 🔐 SQL Injection Detection
@app.route("/predict_sql", methods=["POST"])
def predict_sql():
    data = request.json
    query = data.get("query")

    vec = vectorizer.transform([query])
    pred = sql_model.predict(vec)[0]

    return jsonify({
        "result": "SQL Injection Detected 🚨" if pred == 1 else "Safe Query ✅"
    })


# 🌐 DDoS Prediction
@app.route("/predict_ddos", methods=["POST"])
def predict_ddos():
    data = request.json

    features = np.array(data["features"]).reshape(1, -1)
    features = scaler.transform(features)

    prob = ddos_model.predict_proba(features)[0][1]

    return jsonify({
        "probability": float(prob)
    })


if __name__ == "__main__":
    app.run(debug=True)