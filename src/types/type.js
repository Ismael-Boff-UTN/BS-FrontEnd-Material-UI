
export const types = {
     

    //Autentication Types
    authChecking : '[auth] Checking login state',
    authCheckingFinish: '[auth] Finish cheking login state',
    authStartLogin : '[auth] Start login',
    authLogin : '[auth] login',
    authStartRegister : '[auth] start register',
    authStartTokenRenewal: '[auth] start token renewal',
    authLogout : '[auth] Logout',

    //Autentication Google
    authCheckingGoogle : '[authG] Checking login state',
    authCheckingFinishGoogle: '[authG] Finish cheking login state',
    authStartLoginGoogle : '[authG] Start login',
    authLoginGoogle : '[authG] login',
    
    //Articles Types
    articlesGetAll : '[articles] obtaining articles',
    articleGetOne : '[articles] obtaining one article',
    articleQuit : '[articles] quiting article',

    //Mercado Pago Types

    //Cart
    addArticleToCart : '[cart] adding item to cart'
}