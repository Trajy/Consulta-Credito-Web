import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [
        NgIf,
        RouterModule,
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

    @ViewChild(MatSidenav) sidenav!: MatSidenav

    constructor(private readonly breakpointObserver: BreakpointObserver) { }

    public ngAfterViewInit(): void {
        this.breakpointObserver.observe(['(max-width: 800px)'])
                .subscribe(this.handleResonsiveScreen.bind(this));
    }

    public sidenavClose() {
        if(this.sidenav.mode === 'over') {
            this.sidenav.close()
        }
    }

    private handleResonsiveScreen(res: BreakpointState) {
        if(res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
            return;
        }
        this.sidenav.mode = 'side';
        this.sidenav.open();
    }

}
