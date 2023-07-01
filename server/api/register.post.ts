import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
    const body: RegistrationValues = await readBody(event)
    const client = new PrismaClient();

    try {
        const result = await client.registration.create({
            data: body
        })
        return {
            message: "Successfully Regsitered",
            result,
        };

    }
    catch (e) {
        setResponseStatus(event, 409)
        return {
            message: "Error occured",
            result: e
        }
    }


})