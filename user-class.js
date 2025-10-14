// User Class - Basic implementation with ES6 features
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isLoggedIn = false;
    this.profile = {
      bio: "",
      age: null,
    };
  }

  login(password) {
    if (password === this.password) {
      this.isLoggedIn = true;
      return `${this.username} logged in successfully`;
    }
    return "Invalid password";
  }

  logout() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      return "Logged out successfully";
    }
    return "User is not logged in";
  }

  updateProfile(bio, age) {
    if (!this.isLoggedIn) {
      return "Must be logged in to update profile";
    }
    // Using spread operator
    this.profile = { ...this.profile, bio, age };
    return "Profile updated";
  }
}

// Admin Class - Extends User
class Admin extends User {
  constructor(username, email, password) {
    super(username, email, password);
    this.role = "admin";
    this.permissions = [];
  }

  // Override login to add admin message
  login(password) {
    const result = super.login(password);
    if (this.isLoggedIn) {
      return `Admin ${this.username} logged in`;
    }
    return result;
  }

  // Admin-specific method
  addPermission(permission) {
    this.permissions.push(permission);
    return `Permission ${permission} added`;
  }
}

module.exports = { User, Admin };
