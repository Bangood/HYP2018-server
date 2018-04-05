/**
 * Created by pure on 2018/3/20.
 */
import Model from '../models/primitive';
import logger from '../utils/loggerUtil';

async function list($ctx) {
  let entities = await Model.find($ctx.query).sort({ _id: 1 }).exec();
  $ctx.ok({ error: null, data: entities });
}
function create($ctx) {
  let { dbIndex, name, race, type, selected, imgNum } = $ctx.request.body;
  let entity = new Model({
    _id: dbIndex,
    name,
    race,
    type,
    selected,
    imgNum
  });

  return entity.save().then(() => {
    $ctx.ok({ error: null, data: null });
  }).catch(($err) => {
    logger.error($err);
    $ctx.ok({ error: $err.message, data: null });
  });
}
async function update($ctx) {
  try {
    const entity = await Model.findByIdAndUpdate($ctx.params.id, $ctx.request.body, {
      new: true,
      runValidators: true
    });
    $ctx.ok({ data: entity });
  } catch ($err) {
    $ctx.ok({ error: $err.message });
  }
}
export { list, create, update };