/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations undxr the License.
 */
// Class: FrameLabel
module Shumway.AVM2.AS.flash.display {
  import notImplemented = Shumway.Debug.notImplemented;
  export class FrameLabel extends flash.events.EventDispatcher {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor (name: string, frame: number /*int*/) {
      name = "" + name; frame = frame | 0;
      false && super(undefined);
      notImplemented("Dummy Constructor: public flash.display.FrameLabel");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    // _name: string;
    // _frame: number /*int*/;
    get name(): string {
      notImplemented("public flash.display.FrameLabel::get name"); return;
      // return this._name;
    }
    get frame(): number /*int*/ {
      notImplemented("public flash.display.FrameLabel::get frame"); return;
      // return this._frame;
    }
    ctor(name: string, frame: number /*int*/): void {
      name = "" + name; frame = frame | 0;
      notImplemented("public flash.display.FrameLabel::ctor"); return;
    }
  }
}