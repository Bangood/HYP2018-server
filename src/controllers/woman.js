/**
 * Created by pure on 2018/3/27.
 */
import Model from '../models/woman';
import logger from '../utils/loggerUtil';

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
  let result = await entity.save();

  if (result) {
    $ctx.ok({ error: null, data: null });
  } else {
    $ctx.ok({ error: '出错了', data: null });
  }
}

async function list($ctx) {

}

export { create, list };