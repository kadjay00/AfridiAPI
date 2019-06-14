import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CALENDARTYPE', {schema: 'dbo' } )
@Index('IX_CALENDARTYPE_PKINDEX', ['CAT_CALENDARTYPE_C'], {unique: true})
export class T_CALENDARTYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CAT_CALENDARTYPE_C',
        })
    public CAT_CALENDARTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAT_DESCRIPNED_C',
        })
    public CAT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAT_DESCRIPFRA_C',
        })
    public CAT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CAT_USERID_C',
        })
    public CAT_USERID_C: string | null;

}
