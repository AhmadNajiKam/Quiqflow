// User Class - Basic implementation with TypeScript and ES modules
export class User {
  username: string;
  email: string;
  private password: string;
  isLoggedIn: boolean;
  profile: {
    bio: string;
    age: number | null;
  };

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isLoggedIn = false;
    this.profile = {
      bio: "",
      age: null,
    };
  }

  login(password: string): string {
    if (password === this.password) {
      this.isLoggedIn = true;
      return `${this.username} logged in successfully`;
    }
    return "Invalid password";
  }

  logout(): string {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      return "Logged out successfully";
    }
    return "User is not logged in";
  }

  updateProfile(bio: string, age: number): string {
    if (!this.isLoggedIn) {
      return "Must be logged in to update profile";
    }
    // Using spread operator
    this.profile = { ...this.profile, bio, age };
    return "Profile updated";
  }
}

// Admin Class - Extends User
export class Admin extends User {
  role: string;
  permissions: string[];

  constructor(username: string, email: string, password: string) {
    super(username, email, password);
    this.role = "admin";
    this.permissions = [];
  }

  // Override login to add admin message
  login(password: string): string {
    const result = super.login(password);
    if (this.isLoggedIn) {
      return `Admin ${this.username} logged in`;
    }
    return result;
  }

  // Admin-specific method
  addPermission(permission: string): string {
    this.permissions.push(permission);
    return `Permission ${permission} added`;
  }
}
