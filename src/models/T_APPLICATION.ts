import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_APPLICATION', {schema: 'dbo' } )
export class T_APPLICATION {

    @PrimaryGeneratedColumn({
        type: 'numeric',

        name: 'APP_IDENTITY_N',
        })
    public APP_IDENTITY_N: number;

    @Column('varchar', {
        nullable: true,
        select: false,
        length: 30,
        name: 'APP_DESCRIPFR_C',
        })
    public APP_DESCRIPFR_C: string | null;

    @Column('varchar', {

        nullable: true,
        length: 30,
        name: 'APP_DESCRIPNL_C',
        })
    public description: string | null;

    @Column('varchar', {
        nullable: true,
        length: 150,
        name: 'APP_DIRECTORY_C',
        })
    public APP_DIRECTORY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'APP_EXECUTABLE_C',
        })
    public APP_EXECUTABLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'APP_GROUPSEC_C',
        })
    public APP_GROUPSEC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'APP_FLAGMULT_C',
        })
    public APP_FLAGMULT_C: string | null;

}
