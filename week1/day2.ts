type User = { id: number; name: string };

function greet(user: User): string {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return `${greeting}, ${user.name}!`;
}

const users: User[] = [
  { id: 1, name: "Ahmad" },
  { id: 2, name: "Sara" },
];

users.forEach(u => console.log(greet(u)));

