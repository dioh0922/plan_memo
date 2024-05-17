export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"))
  if(event.node.req.method === "PUT" || event.node.req.method === "PATCH"){
    const body = await readBody(event);
    const update = await prisma.plan_memo.update({
      where: {
        id: id
      },
      data:{
        summary: body.summary,
        detail: body.detail
      }
    })
    return {
      result: update.id,
    }
  }else{
    throw createError({
      statusCode: 405,
      statusMessage: "method not allowed",
    })
  }
})