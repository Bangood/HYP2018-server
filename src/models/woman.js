/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
import Int32 from 'mongoose-int32';

const WomenSchema = new Mongoose.Schema({
  // 姓名
  name: String,
  // 原型
  primitive: {
    type: String,
    unique: true,
    ref: 'Primitive'
  },
  // 年龄
  age: Int32,
  // 身高
  stature: Int32,
  /*
   *和白羽当前状态
   *1-陌生
   *2-熟悉
   *3-暧昧
   *4-敌对
   *5-收服
   */
  status: Int32,
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
   *人物当前类型
   * 1-幼女
   * 2-少女
   * 3-少妇
   * 4-熟妇
   */
  type: Int32,
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
  vaginaFirstTime: String
}, {
    versionKey: false
  });

export default Mongoose.model('women', WomenSchema, 'woman');