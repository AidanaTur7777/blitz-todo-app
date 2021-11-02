import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createTodo from "app/todos/mutations/createTodo"
import { TodoForm, FORM_ERROR } from "app/todos/components/TodoForm"
import { Button } from "@mui/material"

const NewTodoPage: BlitzPage = () => {
  const router = useRouter()
  const [createTodoMutation] = useMutation(createTodo)

  return (
    <div>
      <h1>Create New Todo</h1>
      <p>
        <Link href={Routes.TodosPage()}>
          <Button>Todos</Button>
        </Link>
      </p>
      <TodoForm
        submitText="Create Todo"
        onSubmit={async (values) => {
          try {
            const todo = await createTodoMutation(values)
            router.push(Routes.ShowTodoPage({ todoId: todo.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </div>
  )
}

NewTodoPage.authenticate = true
NewTodoPage.getLayout = (page) => <Layout title={"Create New Todo"}>{page}</Layout>

export default NewTodoPage
