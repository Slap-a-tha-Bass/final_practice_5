import * as passport from 'passport';
import * as PassportJWT from 'passport-jwt';
import * as PassportLocal from 'passport-local';
import { Application } from 'express';

export const configurePassport = (app: Application) => {

    // passport.serializeUser((user: Authors , done) => {
    //     user.password ? delete user.password : null;
    //     done(null, user);
    // });
    passport.deserializeUser((user, done) => done(null, user));

    passport.use(new PassportLocal.Strategy({
        usernameField: 'email'
    }, async (email, password, done) => {
        // try {
        //     const [userFound] = await db_users.find('email', email);
        //     if (!userFound || !compareHash(password, userFound.password)) {
        //         done(null, false);
        //     } else {
        //         done(null, userFound);
        //     }
        // } catch (error) {
        //     done(error);
        // }
    }));

    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        // secretOrKey: jwtConfig.secret
    }, (payload, done) => {
        try {
            done(null, payload);
        } catch (error) {
            done(error);
        }
    }));
    app.use(passport.initialize());
};