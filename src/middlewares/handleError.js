const Error_Handler={
    CastError:res=>
    res.status(400).send({ error: 'malformed id' }),
    ValidationError:(res,{message})=>
    res.status(400).send({ error: message }),

    TokenExpiredError:res=>
    res.status(400).send({ error: 'token expired' }),

    defaultError:res=>
    res.status(500).send({ error: 'internal server error' }),
    
    NotFoundError:res=>
    res.status(404).send({ error: 'not found' })
}