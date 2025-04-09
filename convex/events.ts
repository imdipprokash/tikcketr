import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx, {}) => {
    return await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("is_cancelled"), undefined))
      .collect();
  },
});


export const getById = query({
    args: {eventId:v.id('events')},
    handler: async (ctx, {eventId}) => {
      return await ctx.db.get(eventId)
    },
  });
  


// export const getEventAvailability=query({
//     args:{eventId:v.id('events')},
//     handler: async (ctx,{eventId})=>{
//         const event = await ctx.db.get(eventId);
//         if(!event) throw Error("Event not found.");

//         // Count total purchased tickets

//         const purchasedCount = await ctx.db
//         .query('tickets')
//         .withIndex('by_event',q =>q.eq('eventId',eventId))
//         .collect()
//         .then(
//             tickets=>tickets.filter((t)=>t.status === TICKET_STATUS.VALID||)
//         )


//     }
// })