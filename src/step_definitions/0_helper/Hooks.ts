import {AfterAll}       from "cucumber";
import {RunningBrowser} from "thekla-core";

AfterAll(() => {
   return RunningBrowser.cleanup()
});