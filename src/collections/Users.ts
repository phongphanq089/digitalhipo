import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  // auth: {
  //   verify: {
  //     generateEmailHTML: ({ req, token, user }) => {
  //       const url = `process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`;
  //       return `<a href=${url}>veryfy acccount</a`;
  //     },
  //   },
  // },
  auth: true,

  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      admin: {
        condition: () => false,
      },
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
