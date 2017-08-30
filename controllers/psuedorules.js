exclude 0 thru indexOf 'DETAILED\sACTION'

    
    
    
    
    
    syntax change at indexOf (C[li]aim\sRejections)
    
        iterator-->    claims blah blah blah is/are rejected 35 USC blah 
        
        <<<<<<<ART>>>>>>> ||
        
        teaches blab ad
        
        
        REPEAT
        
        US Patent No = /\d(,\d{3}){2}/ig
        US Published Patent Application = /\d{4}\/\d+/ig
        pageheader = /Application\/.*?Unit.?\s\d+/ig;
        variant1 = Name (US Patent No #####) = /[A-Z]\w+(?=(\s\(\D+)\d{4})/
        variant2 = US Patent No ### to Name = (\d(,\d{3}){2},\d\d\d)|(\d\d\d\d\/\d+))\sto\s(\w+))
        
        
    A-Style
    
    
    
    B-style