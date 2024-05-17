export default defineEventHandler(async (event) => {
    const list = await prisma.plan_memo.findMany({
      where: {
        is_delete: false
      }
    })
    return {
      list: list,
    }
  })