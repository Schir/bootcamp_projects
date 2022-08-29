//learning a bit about how rust outputs text to the console
fn main(){
    //basic hello world output
    //wonder why that ! is there after println. is that needed for all functions?
    println!("Hello world!");
    println!("let me tell you about crabs.");
    println!("among all the crabs in the sea the rust crab, or \"rustacean\", ");
    println!("is the only known crab to have evolved exclusively from being in contact with the\nbarrels of radioactive waste found aboard the sunken remnants of the Titanic.");
    println!("scientists aren't entirely sure how this has happened,\n(the barrels of radioactive waste ending up in the ruins of the Titanic. the crabs make perfect sense.)\nbut when we got down there to check, it turns out that not only had they evolved to have a rusty coating,\nbut they'd also independently created computers and programming languages.");
    println!("as it is known that evolution always favors the crab, so too does it turn out\nthat all programming languages eventually favor some kind of syntax with curly braces and ; line endings");
    
    println!("\nNo idea what any of that means. I'm illiterate.\n\nAnyway, let's look at how Rust deals with console printing");
    

    //ah okay, looks like variable initialization is let here.
    let x = 5 + /* 90 + */ 5;
    //looks like {} is sort of rust's version of the %d/%s c modifier
    //or the `${variable}` modifier in console printing in javascript.
    println!("Is `x` 10 or 100? x = {} ", x);
    //and by the look of it it works a bit more like C here, where it'll
    //read in a list of arguments after the string terminates and apply those in order.
    println!("{} days", 31);
    //oh this is neat, you can tell it which argument to feed in with {arg#}
    //and it just works with your normal string formatting. that's really nice.
    println!("{0}, this is {1}. {1}, this is {0}", "Alice", "Bob");
    
    //alright, let's see what this prints out
    println!("Base 10 repr:               {}",   69420); //69420
    println!("Base 2 (binary repr:        {:b}", 69420); //10000111100101100
    println!("Base 8 (octal) repr:        {:o}", 69420); //207454
    println!("Base 16 (hexadecimal) repr: {:x}", 69420); //10f2c
    println!("Base 16 (hexadecimal) repr: {:X}", 69420); //10F2C
    //okay, so those are how you specify different formats.
    //that's what the instructions said it would do, so it's good to see that it works.
    //output results are pretty much what I expected there, though it's interesting that they've got two different ways of formatting hexadecimal.
    //looks like {:x} prints the letters as lowercase abcdef and {:X} prints them as uppercase ABCDEF.
    //that's a pretty elegant way of handling that, honestly.

    //okay, looks like this is kind of like the way javascript does things, but it's more directly built into the normal string syntax.
    //though it seems like you need to declare what {referent} equals in the args after the print, 
    //kind of wish you could just declare a variable outside of that
    //still though, that seems really nice.
    println!("{subject} {verb} {object}", 
        object="the lazy dog", 
        subject="the quick brown fox",
        verb = "jumps over");

    //huh, that's... hm.
    println!("{number:>5}", number=1);                // "     1"
    println!("{number:0>5}", number=1);               //"000001"
    println!("{number:0>width$}", number=1, width=5); //"000001"
    //yeah I guess that'd be really nice for working with numbers that you want to format in some specific way
    //and it looks like those modifiers are just being applied to the one variable there, 
    //so you could probably do that to a few different ones at the same time
    //wonder if this would print out 100000
    println!("{number:0<5}", number=1);
    //alright, took a few tries to figure out the syntax but that makes a lot more sense than what I was trying initially.
    //looks like {arg:0>5} means that arg is put on the right side of five zeroes
    //and        {arg:0<5} means that arg is put on the left  side of five zeroes
    //which is just a really sensible way of handling that 

    //let's see, what else. gonna copy in the rest of the examples. 
    //I think I'll indent their comments by one more tab space to just kind of visually separate out their comments from mine

    //this one should throw an error for having an incorrect number of args
    //println!("My name is {0}, {1} {0}", "Bond");
    //yeah that throws a compile error
    
        // Only types that implement fmt::Display can be formatted with `{}`.
        // User-defined types do not implement fmt::Display by default

    //what does this do, let's see here
    //looks like if I don't have this it warns me that I haven't constructed this struct
    //and says that the default is #[warn(dead_code)]
    //guess it's just a flag to let the compiler know that it's all cool here. 
    
    //gonna comment this out because i'll be redefining it later
    //struct Structure(i32);

        // This will not compile because `Structure` does not implement
        // fmt::Display
        //println!("This struct `{}` won't print...", Structure(3));
        // FIXME ^ Comment out this line.


        // For Rust 1.58 and above, you can directly capture the argument from
        // surrounding variable. Just like the above, this will output
        // "     1". 5 white spaces and a "1".
    //oh that's super nice, I was just wondering about that up above
    //what else does this example code tell me about rust here
    //I think what I'm seeing is that variables are initialized with let, and then you use ': type' to specify the argument type if needed
    //and then let's see
    //by the look of it f64 is a 64-bit float, which I think this wikipedia page is saying means it allocates 8 bytes.
    //and usize is apparently the size of a pointer on your architecture
    //so it's probably a u64, but if it's running on 32-bit hardware it'd be a u32
    //which, apparently u32 means you're allocating 4 bytes, and u64 means you're allocating 8 byes, if this StackOverflow thread is right.
    let number: f64 = 1.0;
    let width: usize = 5;
    //do I really need to be allocating eight bytes for these though? that seems wasteful for this operation.
    //ah okay, looks like in this argument width does need to be usize.
    println!("{number:>width$}");


        // This structure cannot be printed either with `fmt::Display` or
        // with `fmt::Debug`.
    #[allow(dead_code)]
    struct UnPrintable(i32);

        // The `derive` attribute automatically creates the implementation
        // required to make this `struct` printable with `fmt::Debug`.
    //I guess you just declare the inheritance above structs?
    #[derive(Debug)]
    struct DebugPrintable(i32);

        // Derive the `fmt::Debug` implementation for `Structure`. `Structure`
        // is a structure which contains a single `i32`.
    //and I guess i32 is a 32-bit int?
    #[derive(Debug)]
    struct Structure(i32);
        // Put a `Structure` inside of the structure `Deep`. Make it printable
        // also.
    //ah, reading the example it looks like you're probably supposed to do this outside of the main function.
    //I'll do that next time. I can worry about scope later.
    #[derive(Debug)]
    struct Deep(Structure);

    //it's saying that {:?} is similar to printing with {}. wonder if this has something to do with 
    //that error I got while trying to pass in {variable} {1}, maybe just a more generic way of writing it?
    println!("Now {:?} will print!", Structure(3)); //"Now Structure(3) will print!"

        // The problem with `derive` is there is no control over how
        // the results look. What if I want this to just show a `7`?
    //what does this print anyway?
    println!("Now {:?} will print!", Deep(Structure(7)));//"Now Deep(Structure(7)) will print"
    //i mean i guess that checks out, it's only deriving the debug option, and just printing NameOfFunction(parameters) makes sense.

    //let's see here, what's this doing

    //this stackoverflow comment I'm seeing is saying that <'a> is passing the value to name and giving it a lifetime tied to the lifetime of the Person object 
    #[allow(dead_code)]
    #[derive(Debug)]
    struct Person<'a> {
        //and it looks like this line is assigning name to a string pointer that was passed in when the object was created
        name: &'a str,
        //and then I guess this would be the size of an 8-bit pointer, or one byte.
        age: u8
    }
    let name="Peter";
    let age=27;
    let peter = Person{ name, age };
    //looks like the {:#?} modifier prints the object with more nice formatting
    println!("{:#?}", peter);
    //while the regular {:?} modifier doesn't.
    println!("{:?}", peter);

}
