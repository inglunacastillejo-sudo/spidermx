from flask import Blueprint, request, jsonify
from src.models.contact_submission import ContactSubmission, db

contact_bp = Blueprint("contact_bp", __name__)

@contact_bp.route("/contact", methods=["POST"])
def submit_contact():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    full_name = data.get("fullName")
    email = data.get("email")
    company = data.get("company")
    phone = data.get("phone")
    message = data.get("message")

    if not all([full_name, email, message]):
        return jsonify({"error": "Missing required fields"}), 400

    new_submission = ContactSubmission(
        full_name=full_name,
        email=email,
        company=company,
        phone=phone,
        message=message
    )

    try:
        db.session.add(new_submission)
        db.session.commit()
        return jsonify({"message": "Contact form submitted successfully!"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


