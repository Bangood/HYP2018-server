/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
import Int32 from 'mongoose-int32';

const WomenSchema = new Mongoose.Schema({
// 姓名
  name: String,
  // 人物照片数据库索引
  dbIndex: Int32,
  // 年龄
  age: Int32,
  // 原型
  primitive: String,
  // 身高
  stature: Int32,
  /*
   *职业
   * 1-老师
   * 2-护士
   * 3-
   * 4-
   */
  profession: Int32,
  // 性格
  character: String,
  // 首次出场章节
  firstAppearChapter: Int32,
  // 最后出场章节
  lastAppearChapter: Int32,
  // 最后出场时间
  lastAppearTime: String,
  // 地址
  address: String,
  /*
   *人物类型
   * 1-幼女
   * 2-少女
   * 3-少妇
   * 4-熟妇
   */
  type: Int32,
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
  // 照片数量
  imgNum: Int32,

  /*
   *与白羽关系
   * 1-母子
   * 2-
   * 3-
   * 4-
   */
  relation: Int32,
  /*
   *和白羽做时，是否是处女
   * 0-未知
   * 1-是
   * 2-否
   */
  virgin: Int32,
  // 内射次数
  creampieCount: Int32,
  // 菊花次数
  analSexCount: Int32,
  // 颜射次数
  facialCount: Int32,
  // 乳交次数
  titFuckCount: Int32,
  // 足交次数
  footJobCount: Int32,
  // 口交次数
  oralSexCount: Int32,
  // 第一次内射时间
  vaginaFirstTime: {
    type: String,
    required:true
  }
});
export default Mongoose.model('women', WomenSchema, 'woman');