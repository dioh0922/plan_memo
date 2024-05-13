
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = await prisma.plan_memo.create({
        data: {
            summary: body.summary,
            detail: body.detail,
        },
    })
    return {
        result: result.id
    }
  })