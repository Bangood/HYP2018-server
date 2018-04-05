/**
 * Created by pure on 2018/3/27.
 */
import Model from '../models/woman';

async function create($ctx) {
  let {
    name,
    dbIndex,
    age,
    primitive,
    stature,
    profession,
    character,
    firstAppearChapter,
    lastAppearChapter,
    lastAppearTime,
    address,
    type,
    relation,
    virgin,
    creampieCount,
    analSexCount,
    facialCount,
    titFuckCount,
    footJobCount,
    oralSexCount,
    vaginaFirstTime
  } = $ctx.request.body;
  let entity = new Model({
    name,
    dbIndex,
    age,
    primitive,
    stature,
    profession,
    character,
    firstAppearChapter,
    lastAppearChapter,
    lastAppearTime,
    address,
    type,
    relation,
    virgin,
    creampieCount,
    analSexCount,
    facialCount,
    titFuckCount,
    footJobCount,
    oralSexCount,
    vaginaFirstTime
  });
  try {
    let result = await entity.save();
    $ctx.ok({ error: null });
  } catch ($err) {
    $ctx.ok({ error: $err.message });
  }
}

async function list($ctx) {
  let entities = await Model.find($ctx.query).sort({ _id: 1 }).exec();
  $ctx.ok({ error: null, data: entities });
}

export { create, list };