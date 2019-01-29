import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { dashboardRoutes } from "./dashboard.routes";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from '../guards/auth-guard.service';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)],
  providers: [AuthGuard]
})
export class DashboardModule {}
