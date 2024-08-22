import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { CardComponent } from "./shared/card/card.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent,HeaderComponent,TasksComponent,UserComponent,TaskComponent,NewTaskComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule,SharedModule]
})
export class AppModule {
    
}