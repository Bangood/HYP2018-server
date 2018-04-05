/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
import Int32 from 'mongoose-int32';

const PrimitiveSchema = new Mongoose.Schema({
  _id: String,
  name: String,
  /*
   *人种
   * 0-未知
   * 1-白色人种
   * 2-黄种人种
   * 3-黑种人种
   * 4-棕种人种
   * 5-混血人种
   */
  race: Int32,
  /*
   *人物类型
   * 0-未知
   * 1-幼女
   * 2-少女
   * 3-少妇
   * 4-熟妇
   */
  type: Int32,
  // 是否被选
  selected: Boolean,
  // 照片数量
  imgNum: Int32
}, {
    versionKey: false
  });

export default Mongoose.model('Primitive', PrimitiveSchema, 'primitive');