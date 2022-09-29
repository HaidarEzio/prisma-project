//import prisma
import { PrismaClient } from "@prisma/client";
import { stringify } from "querystring";

const prisma = new PrismaClient();

//create username with prisma client, fill the username with 'mirrormaker'

async function main() {
  const newUser = await prisma.user.findMany();
  console.log(newUser);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
