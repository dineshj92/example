package com.bix.selenium.cucumber;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, features = "resources/feature",
glue = { "com.bix.selenium.cucumber.test" },
format= {"html:resources"})
public class TestRunner {

}