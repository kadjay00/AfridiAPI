import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DISPLAYCODE', {schema: 'dbo' } )
export class T_DISPLAYCODE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'DIS_DISPLAY_C',
        })
    public DIS_DISPLAY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DIS_DESCRIPNED_C',
        })
    public DIS_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DIS_DESCRIPFRA_C',
        })
    public DIS_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DIS_USERID_C',
        })
    public DIS_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'DIS_FLAGDELETE_C',
        })
    public DIS_FLAGDELETE_C: string | null;

}
