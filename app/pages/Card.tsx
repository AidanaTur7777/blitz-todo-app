import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { Link, Routes } from "blitz"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function BasicCard({ todos }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {todos.map((todo) => (
        <Card sx={{ minWidth: 10 }} key={todo.id}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h3" component="div">
                <li>
                  <Link href={Routes.ShowTodoPage({ todoId: todo.id })}>
                    <Button>
                      {todo.title} : {todo.status}
                    </Button>
                  </Link>
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </ul>
  )
}
