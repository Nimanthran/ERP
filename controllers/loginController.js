exports.login=async(req,res) => {
    const {login} = req.query;
    if(login){
        return res.render('pages/login',{
            incorrect : 1
        });
    }
    // console.log(req.session.user);
    if(!req.session.user && req.session.user!='1q0fr/HH06Y?=H7!,:D+!#F<c1@i;M'){
        return res.render('pages/login',{
            incorrect : 0
        });
    }
    return res.redirect('/dashboard');
}

exports.loginPost=async(req,res) => {
    const {Password}  = req.body;
    if (Password == '5h(UZ3,1o2') {
        req.session.user='1q0fr/HH06Y?=H7!,:D+!#F<c1@i;M'
        return res.redirect('/dashboard');
    }
    return res.redirect('/login?login=false');
}