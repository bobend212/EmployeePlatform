import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { EditUserProfileComponent } from "../edit-user-profile/edit-user-profile.component";

@Injectable()
export class PreventUnsavedChanges
  implements CanDeactivate<EditUserProfileComponent> {
  canDeactivate(component: EditUserProfileComponent) {
    if (component.editForm.dirty) {
      return confirm(
        "Are you sure you want to continue? Any unsaved changes will be lost!"
      );
    }
    return true;
  }
}
