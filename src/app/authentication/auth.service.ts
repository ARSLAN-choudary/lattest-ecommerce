// auth.service.ts
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private isLoggedInKey = "isLoggedIn";

    constructor() {
        const isLoggedIn = localStorage.getItem(this.isLoggedInKey);
        if (isLoggedIn) {
            this.isLoggedIn = JSON.parse(isLoggedIn);
        } else {
            this.isLoggedIn = false;
        }
    }

    private isLoggedIn: boolean;

    login() {
        this.isLoggedIn = true;
        localStorage.setItem(
            this.isLoggedInKey,
            JSON.stringify(this.isLoggedIn)
        );
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem(this.isLoggedInKey);
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}
