import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EXPEDITION_LINE', {schema: 'dbo' } )
export class T_EXPEDITION_LINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'EXL_EXPEDITION_N',
        })
    public EXL_EXPEDITION_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'EXL_RETOURS_N',
        })
    public EXL_RETOURS_N: number;

    @Column('char', {
        nullable: true,
        name: 'EXL_STATUS_C',
        })
    public EXL_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EXL_STATUSDATE_DAT',
        })
    public EXL_STATUSDATE_DAT: Date | null;

}
