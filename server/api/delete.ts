export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const deleted = await prisma.plan_memo.update({
      where: {
        id: body.id
      },
      data:{
        is_delete: true
      }
    })
    return {
      result: deleted.id,
    }
  })