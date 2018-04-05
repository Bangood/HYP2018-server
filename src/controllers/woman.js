/**
 * Created by pure on 2018/3/27.
 */
import Model from '../models/woman';
import PrimitiveModel from '../models/primitive';

async function create($ctx) {
  let {primitive} = $ctx.request.body;
  try {
    const updatePrimitive = await PrimitiveModel.findByIdAndUpdate(primitive, { selected: true });
    if (!updatePrimitive) {
      return $ctx.ok({ error: `primitive:${primitive}不存在或者更新失败` });
    }
  } catch ($err) {
    return $ctx.ok({ error: $err.message });
  }
  let entity = new Model($ctx.request.body);
  try {
    let result = await entity.save();
    $ctx.ok({ error: null });
  } catch ($err) {
    $ctx.ok({ error: $err.message });
  }
}

async function list($ctx) {
  let entities = await Model.find($ctx.query).populate('primitive').sort({ _id: 1 }).exec();
  $ctx.ok({ error: null, data: entities });
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

export { create, list, update };