export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, "id"))
    const deleted = await prisma.plan_memo.update({
      where: {
        id: id
      },
      data:{
        is_delete: true
      }
    })
    return {
      result: deleted.id,
    }
  })