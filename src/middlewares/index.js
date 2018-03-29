/**
 * Created by pure on 2018/3/20.
 */

/**
 * 404
 */
async function pageNotFound($ctx) {
  $ctx.staus = 404;
  switch ($ctx.accepts('html', 'json')) {
    case 'html':
      $ctx.type = 'html';
      $ctx.body = '<p> Page Not Found </p>';
      break;
    case 'json':
      $ctx.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      $ctx.type = 'text';
      $ctx.body = 'Page Not Found';
  }
}

/**
 * 检测是否登录
 */
async function isLogin($ctx, $next) {
  if (!$ctx.state.currentUser) {
    return $ctx.error('您还未登录，请登录后重试!', {
      jump: '/user/login'
    });
  }
  await $next();
}

export default { pageNotFound };