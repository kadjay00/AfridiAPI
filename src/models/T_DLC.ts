import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DLC', {schema: 'dbo' } )
export class T_DLC {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'DLC_DATA_DAT',
        })
    public DLC_DATA_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'DLC_USERID_C',
        })
    public DLC_USERID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'DLC_CREATION_DAT',
        })
    public DLC_CREATION_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'DLC_COMPARE_C',
        })
    public DLC_COMPARE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'DLC_COMPARE_DAT',
        })
    public DLC_COMPARE_DAT: Date | null;

}
