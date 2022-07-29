const activities = [
  {
    id: 0,
    name: 'Running',
    date: '26/07/2022',
  },
  {
    id: 1,
    name: 'Swimming',
    date: '26/07/2022',
  },
  {
    id: 2,
    name: 'Running',
    date: '27/07/2022',
  },
  {
    id: 3,
    name: 'Hiking',
    date: '28/07/2022',
  },
];

const usernameSchema = Joi.alphanum().min(10).max(30);

export class ActivityPage {


  submit() {
    const userSchemaResult = usernameSchema.validate(this.state.username);
    if ()
  }

  render() {
    const { activityId } = params;
    const activity = activities.find((a) => a.id == activityId);
    return (
      <div>
        <h1>Activity Page</h1>
        <h2>id {params.activityId}</h2>
        <h2>name: {activity.name}</h2>
        <input value={...} onChange={...}></input>
      </div>
    );
  }
}
