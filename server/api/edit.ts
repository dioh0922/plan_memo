export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const update = await prisma.plan_memo.update({
      where: {
        id: body.id
      },
      data:{
        summary: body.summary,
        detail: body.detail
      }
    })
    return {
      result: update.id,
    }
  })