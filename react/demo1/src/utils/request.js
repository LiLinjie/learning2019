import qs from 'qs'

async function request ({ cookie, method, url, body }) {
  method = method.toLowerCase()

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include'
  };

  if (['get', 'jsonp'].indexOf(method) >= 0 && body) {
    url = url.replace(/\?$/, '');
    if (/\?/.test(url)) {
      url += '&';
    } else {
      url += '?';
    }
    url += qs.stringify(body);
  } else {
    options.body = body && JSON.stringify(body);
  }

  let res;
  res = await fetch(url, options);

  if (res.status === 200) {
    res = await res.json();
    const hasNoRedirectParam = body && body.noForceRedirect; // 是否有未授权不跳转字段
    const shouldRedirect = res.status === 401 && !hasNoRedirectParam; //是否需要跳转

    if (shouldRedirect) {
      const {appId, domain, qunId, callbackUrl, oauthPlatform} = res.data || {};
      // const oAuthParams = {
      //   appId,
      //   domain,
      //   qunId,
      //   callbackUrl,
      //   oauthPlatform,
      //   isWechat,
      //   isHybrid,
      //   link,
      //   hostHref,
      // };
      // window.location.href = getWebOAuthUrl(oAuthParams);
      console.log('请授权');
    } else if (res.status !== 1 && res.status !== 401) {
      alertTip(res.msg);
    }
    return res;
  }
}
