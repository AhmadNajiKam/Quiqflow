const { User, Admin } = require("./user-class");

describe("User Class", () => {
  let user;

  beforeEach(() => {
    user = new User("john", "john@email.com", "pass123");
  });

  test("should create a user", () => {
    expect(user.username).toBe("john");
    expect(user.email).toBe("john@email.com");
    expect(user.isLoggedIn).toBe(false);
  });

  test("should login with correct password", () => {
    const result = user.login("pass123");
    expect(result).toBe("john logged in successfully");
    expect(user.isLoggedIn).toBe(true);
  });

  test("should not login with wrong password", () => {
    const result = user.login("wrong");
    expect(result).toBe("Invalid password");
    expect(user.isLoggedIn).toBe(false);
  });

  test("should logout when logged in", () => {
    user.login("pass123");
    const result = user.logout();
    expect(result).toBe("Logged out successfully");
    expect(user.isLoggedIn).toBe(false);
  });

  test("should not logout when not logged in", () => {
    const result = user.logout();
    expect(result).toBe("User is not logged in");
  });

  test("should update profile when logged in", () => {
    user.login("pass123");
    const result = user.updateProfile("I am a developer", 25);
    expect(result).toBe("Profile updated");
    expect(user.profile.bio).toBe("I am a developer");
    expect(user.profile.age).toBe(25);
  });

  test("should not update profile when not logged in", () => {
    const result = user.updateProfile("Bio", 30);
    expect(result).toBe("Must be logged in to update profile");
  });
});

describe("Admin Class", () => {
  let admin;

  beforeEach(() => {
    admin = new Admin("admin1", "admin@email.com", "admin123");
  });

  test("should create an admin with role", () => {
    expect(admin.username).toBe("admin1");
    expect(admin.role).toBe("admin");
    expect(admin.permissions).toEqual([]);
  });

  test("should login with admin message", () => {
    const result = admin.login("admin123");
    expect(result).toBe("Admin admin1 logged in");
    expect(admin.isLoggedIn).toBe(true);
  });

  test("should add permissions", () => {
    const result = admin.addPermission("delete_user");
    expect(result).toBe("Permission delete_user added");
    expect(admin.permissions).toContain("delete_user");
  });

  test("admin should inherit user methods", () => {
    admin.login("admin123");
    const result = admin.logout();
    expect(result).toBe("Logged out successfully");
  });
});
