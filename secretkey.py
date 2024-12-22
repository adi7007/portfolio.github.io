import secrets

# Generate a secure secret key
key = secrets.token_hex(24)
print(f"Generated Secret Key: {key}")
