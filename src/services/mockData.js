export const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ];
  
  export const fetchRoles = async () => Promise.resolve(mockRoles);
  